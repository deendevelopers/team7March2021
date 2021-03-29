import mongoose from 'mongoose';

export interface PostInterface {
    _id?: string;
    title: string;
    description: string;
    location: SuggestedLocationInterface;
    date: Date;
    type: 'service' | 'event';
    host_username: string;
    host_email?: string;
    host_mobile?: string;
    host_languages: string[];
    host_profile_image?: string;
}

export interface SuggestedLocationInterface {
    name: string,
    postcode: string,
}

interface PostModelInterface extends mongoose.Model<any> {
    build (attr: PostInterface): any
}

const suggestedLocationSchema = new mongoose.Schema({
    name: String,
    postcode: String,
 })

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    suggestedLocation: suggestedLocationSchema,
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    host_username: {
        type: String,
        required: true
    },
    host_email: {
        type: String,
        required: false
    },
    host_mobile: {
        type: String,
        required: false
    },
    host_languages: {
        type: [String],
        required: false
    },
    host_profile_image: {
        type: String,
        required: false
    }
})

export const Post = mongoose.models['Post'] || mongoose.model<any, PostModelInterface>('Post', postSchema)

postSchema.statics.build = (attr: PostInterface) => {
    return new Post(attr)
}