// Notifications dropdown

interface notificationType {
  avatar: string;
  title: string;
  subtitle: string;
}

const notifications: notificationType[] = [
  {
    avatar: "/images/profile/user-10.jpg",
    title: "お知らせタイトル",
    subtitle: "お知らせタイトル本文",
  },
];

//
// Profile dropdown
//
interface ProfileType {
  href: string;
  title: string;
  subtitle: string;
  icon: any;
}
const profile: ProfileType[] = [
  {
    href: "/",
    title: "アカウント設定",
    subtitle: "アカウント情報を確認・変更",
    icon: "/images/svgs/icon-account.svg",
  },
];

// apps dropdown

interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  avatar: string;
}

const appsLink: appsLinkType[] = [];

interface LinkType {
  href: string;
  title: string;
}

const pageLinks: LinkType[] = [];

export { notifications, profile, pageLinks, appsLink };
