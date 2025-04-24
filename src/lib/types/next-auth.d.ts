// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { User } from "next-auth";

interface googleProfile {
  email: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
}
interface facebookProfile {
  id: string;
  name: string;
  email: string;
  image: string;
  picture: {
    data: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number;
    };
  };
}

interface twitterProfile {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: null;
  entities: { description: { urls: [] } };
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: null;
  time_zone: null;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: null;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: null;
  profile_background_image_url_https: null;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
  withheld_in_countries: [];
  suspended: boolean;
  needs_phone_verification: boolean;
}

declare module "next-auth" {
  interface User {
    id: string;
    token: string;
    user: {
      _id: string;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      role: string;
      isVerified: boolean;
      createdAt: string;
    };
    google?: Omit<googleProfile, "picture"> & {
      image: string;
    };
    facebook?: Omit<facebookProfile, "picture"> & {
      image: string;
    };
    twitter?: Pick<twitterProfile, "id" | "name"> & {
      image: string;
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Profile {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Session {
    user: User.User | User.google | User.facebook | User.twitter;
  }
}
declare module "next-auth/jwt" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface JWT extends User {}
}
