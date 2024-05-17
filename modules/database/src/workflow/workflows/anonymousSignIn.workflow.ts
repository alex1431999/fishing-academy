import {Workflow} from "../workflows";
import {supabase} from "../../../client";
import {userSettingsModel} from "../../model";

export class AnonymousSignInWorkflow extends Workflow {
    public async execute(): Promise<void> {
        const {data: {session}} = await supabase.auth.getSession()

        let userId: string

        if (session) {
            // If session exists, get the user ID from the session
            userId = session.user.id
        } else {
            // If no session, sign in anonymously
            const {data: {user}, error} = await supabase.auth.signInAnonymously()

            if (error || !user) {
                throw new Error('Anonymous sign-in has failed')
            }

            userId = user.id
        }

        // Use the userId for your logic
        await userSettingsModel.createIfDoesntExist({userId})
    }
}

export const anonymousSignInWorkflow = new AnonymousSignInWorkflow()