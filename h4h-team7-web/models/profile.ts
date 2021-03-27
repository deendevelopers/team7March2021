import mongoose from 'mongoose';

export interface ProfileInterface {
    id: number;
    username: string;
    email: string;
    mobile: string;
    languages: string[];
    profile_image: string;
}

interface ProfileModelInterface extends mongoose.Model<any> {
    build (attr: ProfileInterface): any
 }

const profileSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    mobile: {
        type: String,
        required: false
    },
    languages: {
        type: [String],
        required: false
    },
    profile_image: {
        type: String,
        required: false
    }
})

export const Profile = mongoose.models['Profile'] || mongoose.model<any, ProfileModelInterface>('Profile', profileSchema)

profileSchema.statics.build = (attr: ProfileInterface) => {
    return new Profile(attr)
}