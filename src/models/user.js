class user {

    constructor(
        
        id,
        nickname,
        password,
        email,
        phone,
        socials, // Array

        avatar,
        level,
        items,
        equip,
        guild,
        community,


        comments, // -> Comments
        publications, // -> User publications
        replays, // -> User updated replays
        favourites, // -> Mark as favourite
        
        ){
            this.id = id;
            this.nickname = nickname;
            this.password = password;
            this.email = email;
            this.phone = phone;
            this.socials = socials;

            this.avatar = avatar;
            this.level = level;
            this.items = items;
            this.equip = equip;


    }
};