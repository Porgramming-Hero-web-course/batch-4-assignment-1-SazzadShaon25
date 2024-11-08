{
    interface Profile{
        name: string;
        age: number;
        email: string;
    }
    const updateProfile = (obj: Profile, updates: Partial<Profile>): Profile =>
    {
        return { ...obj, ...updates};
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}