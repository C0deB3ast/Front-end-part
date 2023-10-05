import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthenService {
  client = new Client();
  account;
  consructor(){
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId)
      this.account = new Account(this.client)
  }
  async createAccount({email, password,name}){ //we  here destructure services of appwrite bcs we do not want to depend on appwrite for authentication
    //this method can be fail so for failSafe
    try {
      const userAccount = await this.account.create(ID.unique(),email, password, name)
      if (userAccount) {
        // call login method
        return this.login({email, password})
      } else {
        return userAccount;
      }
    } catch (error) {
       throw error
    }
  }

  async login({email, password}){
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error
    }
  }
}


const authenService = new AuthenService();

export default authenService;
