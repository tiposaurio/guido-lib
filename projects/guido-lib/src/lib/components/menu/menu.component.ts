import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'gui-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class GuiMenuComponent implements OnInit {
    showMenu = '';
    showSubMenu = '';
    public sidebarnavItems: any[] = [];
    @Input() set menu(d: any) {
        if (d) {
            this.sidebarnavItems = d;
            this.openMenuLoad(d);
        }
    }
    @Output() selectedItem = new EventEmitter();
    
    public enterpriseData: any;
    public userData: any = {
    name: '',
    email: '',
  };
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }
  private MenuDataState$: Subscription;
  private MenuDataAllState$: Subscription;
  openActivatemenu: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private menuService: MenuService,
    // private authStoreService: AuthStoreService,
    // private logoutService: LogoutService,
    // private stateService: StateService,
    // private enterpriseService: EnterpriseService,
  ) {}

  // End open close
  ngOnInit() {
    // this.getListMenu();
    // this.getUserData();
    // this.getEnterprise();
    // this.MenuDataState$ = this.stateService.onMenuState$().subscribe(res => {
    //   const arr = [];
    //   arr.push(res); // console.log('res...', res);
    //   this.showMenu = res.title;
    //   this.sidebarnavItems = arr;
    // });
    // this.MenuDataAllState$ = this.stateService.onMenuAllState$().subscribe(response => {
    //   this.sidebarnavItems = response;
    // });
  }
  ngOnDestroy() {
    this.MenuDataState$.unsubscribe();
    this.MenuDataAllState$.unsubscribe();
  }
//   public getListMenu() {
//     this.menuService.getAll$().subscribe(res => {
//       this.sidebarnavItems = res.data;
//       this.openMenuLoad();
//     });
//   }
//   private getEnterprise() {
//      this.enterpriseService.getAll$().subscribe(response => {
//           const enterData = response && response.data || {};
//           this.authStoreService.setEnterpriseData(enterData);
//       })
//   }
//   public getUserData() {
//     this.userData = this.authStoreService.getUserData();
//   }

//   public logout() {
//     this.logoutService.getAll$().subscribe(res => {
//       this.authStoreService.clearAll();
//       this.router.navigate(['/authentication/login'], {relativeTo: this.route});
//     });
//   }
  // onPathLink(path) {
  //   if (path) {
  //     console.log(path, '<<------------');
  //     this.router.navigate([path], {relativeTo: this.route});
  //   }
  // }
  private openMenuLoad(sidebarnavItems) {
    const path = window.location.pathname;
    const s_path = path.split('/');
   if (s_path[1]) {
      if (s_path[2]) {
        sidebarnavItems = sidebarnavItems.map(items => {
          if (items.path === `${s_path[2]}`) {
            this.showMenu = items.title;
          }
          items.submenu.forEach(subItems => {
            if (subItems.path === `/${s_path[1]}/${s_path[2]}/${s_path[3]}`) {
              this.showSubMenu = subItems.title;
            }
            return subItems;
          });
          return items;
        });
      }
    }
  }
}