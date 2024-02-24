import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.userId as string;
  if (!id) {
    return res.status(400).json("User ID is not present");
  }
  try {
    const expenses = await prisma.expense.findMany({
      where: {
        user_id: id,
      },
    });
    if (!expenses) {
      return res.status(400).json("User does not have any expenses");
    }
    return res.json(expenses);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      return res.json(err.message);
    }
    return res.json(err);
  }
}