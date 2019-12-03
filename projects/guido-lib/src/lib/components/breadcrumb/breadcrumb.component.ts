import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, UrlSegment } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'gui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() layout;
  @Output() breadcrumbEvent = new EventEmitter();
  pageInfo;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(event => {
        this.titleService.setTitle(event['title']);
        this.pageInfo = event;
      });
  }
  ngOnInit() {}

  redirectBack(title) {
    // console.log(this.router, '..bread-ruta..', this.titleService.getTitle());
    // console.log('..title..', title);
    /*this.router.navigate(['../'], {relativeTo: this.activatedRoute});*/
    const url: UrlSegment[] = this.activatedRoute.snapshot.url;
    const link = (url[0] && url[0].path) || '';
    const relativeUrl = link ? `../${link}` : `./${link}`;
    // console.log(url, '..bread-ruta..', link);
    
    // this.router.navigate([relativeUrl], { relativeTo: this.activatedRoute });
  }
  eventBreadcrumb() {
    this.breadcrumbEvent.emit(this);
  }
  // public onBack() {
  //   const url: UrlSegment[] = this.route.snapshot.url;
  //   const link = (url[0] && url[0].path) || '';
  //   const relativeUrl = link ? `../${link}` : `./${link}`;
  //   this.router.navigate([relativeUrl], { relativeTo: this.route });
  // }

}
