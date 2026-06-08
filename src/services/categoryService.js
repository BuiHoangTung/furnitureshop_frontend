import * as request from '@/utils/request';

export const getCategories = async (name) => {
  try {
    const res = await request.get(`categories/active/${name}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
