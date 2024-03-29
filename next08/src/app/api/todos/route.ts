import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

// To get data back from server

export async function GET(request: Request) {
  // to find url origin.
  const origin = request.headers.get("origin");

  const response = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await response.json();

  //to allow CORS
  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application.json",
    },
  });
}

//Tp delete

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: "Todo id required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
  });
  return NextResponse.json({ message: `Todo ${id} deleted` });
}

//To send data to the server
export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title)
    return NextResponse.json({ message: "Missing required data" });

  const response = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });
  const newTodo: Todo = await response.json();
  return NextResponse.json(newTodo);
}

//To update some data

export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();

  if (!userId || !id || !title || typeof completed !== "boolean")
    return NextResponse.json({ message: "Missing required data" });

  const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });
  const updatedTodo: Todo = await response.json();
  return NextResponse.json(updatedTodo);
}
