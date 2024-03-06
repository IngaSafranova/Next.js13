import { NextResponse } from "next/server";


const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

type Props = {
    params: {
        id: string
    }
}


// To get data back from server

export async function GET(request: Request, { params: {id}}: Props) {

    //define todoId.From requested url we remove everything after the last / - that will be todoId
// const id = request.url.slice(request.url.lastIndexOf('/') +1)

    
  const response = await fetch(`${DATA_SOURCE_URL}/${id}`);

    const todo: Todo = await response.json();
    
    if (!todo.id) return NextResponse.json({'message': `Todo with ${id} does not exists`})
  return NextResponse.json(todo);
}