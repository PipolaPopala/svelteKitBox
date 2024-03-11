import { redirect } from "@sveltejs/kit";
import { getUser } from "$lib/queries/getUser";
import { getUserFiles } from "$lib/queries/getUserFiles";
import { getFilesCount } from "$lib/queries/getFilesCount";

export const load = async ({ locals }) => {
  const { userId } = locals
  if (!userId) {
    throw redirect(307, '/')
  }
  const user = await getUser(userId)
  const files = await getUserFiles(userId)
  const count = await getFilesCount(userId)
  return {
    user,
    files,
    count
  }
};