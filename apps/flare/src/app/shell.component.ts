import { Component, Inject } from '@angular/core';
import { CURRENT_USER } from '@flare/ui/auth';
import { Observable } from 'rxjs';
import { User } from '@flare/api-interfaces';

@Component({
  selector: 'flare-shell',
  template: ` <div class="content">
    <aside>
      <flare-sidebar [user]="user$ | async"></flare-sidebar>
    </aside>
    <main class="border-x border-slate-200">
      <router-outlet></router-outlet>
    </main>
    <aside></aside>
  </div>`,
  styles: [
    //language=SCSS
    `
      :host {
        @apply block;
        overflow-y: scroll;
      }
      .content {
        @apply mx-auto grid h-screen max-w-screen-xl;
        grid-template-columns: 250px 1fr 250px;
        grid-template-rows: 1fr;
      }
    `,
  ],
})
export class ShellComponent {
  constructor(@Inject(CURRENT_USER) public readonly user$: Observable<User>) {}
}