export interface UserType {
  id?: number;
  avatar_url?: string;
  user: {
    id?: number;
    avatar_url?: string;
    login?: string;
    html_url?: string;
  }
}