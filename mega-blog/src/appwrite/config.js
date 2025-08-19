import conf from '../conf/conf';
import {Client, Account, ID, Databases, Query, Storage} from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage, status, userID }) {
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionID,
            slug,
            {
                title,
                content,
                featuredimage,
                status,
                userID
            }
        )
    } catch (error) {
        console.log("Appwrite service :: create post :: error ", error);    
    }
    }

    async updatePost(slug, {title, content, featuredimage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite services :: update post error :: error ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite services :: delete post error :: error ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            console.log("Appwrite services :: get post error :: error ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: get posts error :: error ", error);
            
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite services :: upload file error :: error ", error);
            return false;
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Appwrite services :: delete file error :: error ", error);
            return false;
        }
    }

    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }
}



const service = new Service()

export default service;


