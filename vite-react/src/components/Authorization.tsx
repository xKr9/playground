import { useCallback } from "react";

export type Comment = {
  id: string;
  content: string;
  userId: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: RolesTypes;
};

export enum ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

type RolesTypes = keyof typeof ROLES;

export const POLICIES = {
  "comment:delete": (user: User, comment: Comment) => {
    if (user.role === ROLES.ADMIN) return true;
    if (user.role === ROLES.USER && comment.userId === user.id) return true;
    return false;
  },
};

// example auth hook
const useAuth = () => {
  const user = {
    id: "1",
    name: "John Doe",
    email: "",
    role: ROLES.ADMIN,
  };
  return { user };
};

export const useAuthorization = () => {
  const { user } = useAuth();
  if (!user) throw Error("Unauthorized");

  const checkAccess = useCallback(
    ({ allowedRoles }: { allowedRoles: RolesTypes[] }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(user.role);
      }
      return true;
    },
    [user.role]
  );

  return {
    checkAccess,
    role: user.role,
  };
};

type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
  | {
      allowedRoles: RolesTypes[];
      policyCheck?: never;
    }
  | {
      allowedRoles?: never;
      policyCheck: boolean;
    }
);

export const Authorization = ({
  policyCheck,
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();
  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  if (typeof policyCheck !== "undefined") {
    canAccess = policyCheck;
  }
  return <>{canAccess ? children : forbiddenFallback}</>;
};
