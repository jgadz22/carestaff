// ====== USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string | null;
  lastName: string | null;
  photo: string;
};

export type UpdateUser = {
  userId: string;
  user: {
    _id: string;
    clerkId: string;
    email: string;
    firstName: string;
    lastName: string;
    photo: string;
    position: string;
  };
  path: string;
};

export type DeleteUser = {
  userId: string;
  path: string;
};

export type GetAll = {
  query: string;
  limit: number;
  page: number;
};

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type DeleteJobParams = {
  jobId: string;
  path: string;
};
