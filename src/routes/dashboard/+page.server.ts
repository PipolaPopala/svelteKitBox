import { getUser } from "$lib/queries/getUser";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  const { userId } = locals
  if (!userId) {
    throw redirect(307, '/')
  }

  return {
    user: getUser(userId).catch(err => {
      console.error('Error fetching user:', err)
      throw err
    })
  }
};