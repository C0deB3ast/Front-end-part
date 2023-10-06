import config from "../config/config";
import { Client, ID, Storage, Databases, Query } from "appwrite";

export class DataBaseService {
  client = new Client();
  database;
  bucket;
  consructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  status;
  async createDatabase({ title, slug, content, userId, featuredImg, status }) {
    try {
      return await this.database.createDocument(
        config.appWriteDataBaseId,
        config.appWriteCollectionId,
        slug,
        { title, content, userId, featuredImg, status }
      );
    } catch (error) {
      console.log("Backend Service :: createDatabase :: error", error);
    }
  }
  async updateDatabase(slug,{ title,content, featuredImg, status }) {
      try {
       return await this.database.updateDocument(config.appWriteDataBaseId, config.appWriteCollectionId, slug, { title, content, featuredImg, status }); 
      } catch (error) {
        console.log("Backend Service :: updateDatabase :: error", error);
      }
  }
  async deleteDatabase(slug){
    try {
     await this.database.deleteDocument(config.appWriteDataBaseId,config.appWriteCollectionId,slug);
     return true
    } catch (error) {
      console.log("Backend Service :: deleteDatabase :: error", error);
      return false
    }
    
  }
  async getDatabase(slug){
    try {
      await this.database.getDocumnet(config.appWriteDataBaseId,config.appWriteCollectionId,slug)
      return true
    } catch (error) {
      console.log("Backend Service :: getDatabase :: error", error);
      return false
    }
  }
  async getAllDatabase(querries=[Query.equal("sattus","active")]){
    try {
      return await this.database.listDocuements(config.appWriteDataBaseId,config.appWriteCollectionId,querries)
    } catch (error) {
      console.log("Backend Service :: getAllDatabase :: error", error);
      return false
    }
    
  }

  //File upload/delete Service
  
  async updateFile(file){
    try {
      return await this.bucket.createFile(config.appWriteBucketId,ID.unique(),file)
    } catch (error) {
      console.log("Backend Service :: updateFile :: error", error);
    }
  }
  async deleteFile(fileID){
    try {
     await this.bucket.deleteFile(config.appWriteBucketId,fileID)
     return true
    } catch (error) {
      console.log("Backend Service :: deleteFile :: error", error);
      return false
    }
  }

  getFilePreview(fileID){
    return thiis.bucket.getFilePreview(config.appWriteBucketId,fileID)
  }
}

const dataBaseService = new DataBaseService();

export default dataBaseService;
