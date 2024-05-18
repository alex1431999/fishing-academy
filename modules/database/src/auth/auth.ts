import {supabase} from "../../client";

export class Auth {
    public async getUserId(): Promise<string | null> {
        const {data: {session}} = await supabase.auth.getSession()
        return session?.user?.id || null
    }

    public async getUserIdSafe(): Promise<string> {
        const userId = await this.getUserId()
        if (userId === null) throw new Error('user is not authenticated')
        return userId
    }
}

export const auth = new Auth()