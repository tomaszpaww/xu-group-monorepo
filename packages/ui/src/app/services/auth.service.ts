import { Injectable } from "@angular/core";
import Clerk from "@clerk/clerk-js";
import { UserResource } from "@clerk/types";

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly apiKey = 'pk_test_dmFsaWQtZHJ1bS0yMS5jbGVyay5hY2NvdW50cy5kZXYk'; // TODO extract me to env variables;
  private clerk: Clerk;


  constructor() {
    this.clerk = new Clerk(this.apiKey);
  }

  get currentUser(): UserResource | undefined | null {
    return this.clerk.user;
  }

  get isAuthenthicated(): boolean {
    return !!this.clerk.user
  }

  async load(): Promise<void> {
    await this.clerk.load();
  }

  async signIn() {
    await this.clerk.openSignIn({

    });
  }
}
