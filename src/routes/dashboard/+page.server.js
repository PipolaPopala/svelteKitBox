// @ts-nocheck
import { fail, redirect } from "@sveltejs/kit";
import { getUser } from "$lib/queries/getUser";
import { getUserFiles } from "$lib/queries/getUserFiles";
import { getFilesCount } from "$lib/queries/getFilesCount";
import { editFileName } from "$lib/mutations/editFileName.server";

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

export const actions = {
  editFileName: async ({ request }) => {
    const data = await request.formData();
    const fileName = data.get('fileName');
    const id = data.get('id');
    try {
      await editFileName(id, fileName);
      return { editFileNameSuccess: 'File name updated successfully' }
    } catch (err) {
      const errorMessage = err.message
      return fail(422, {
        editFileNameError: errorMessage
      })
    }
  }
};