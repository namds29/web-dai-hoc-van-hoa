export const API_ADMIN = Object.freeze(
    {
        AUTH_LOGIN: "auth/login",
        HOMEPAGE: {
            POST: {
                INDEX: "posts",
                WITH_CATEGORY_ID: "posts?categoryID=",
                APPROVE: "posts/approve"
            },
            BANNER: "banners",
            ANNOUNCEMENT: "announcements",
            ADDMISSION: "accordions"
        }
    }
)