import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthenService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appWrite)
      .setProject(config.appWriteProjectId);

    this.account = new Account(this.client);
  }
}

const authenService = new AuthenService();

export default authenService;
