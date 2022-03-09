import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  id?: StringFilter;
};
