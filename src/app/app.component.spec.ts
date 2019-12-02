import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { User } from './model/user.interface';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let appComponent;
  let servicio;
  //afterAll
  //afterEach
  //beforeEach
  //beforeAll

  beforeAll(() => {
    console.log('beforeAll Se ejecuta al iniciar las pruebas');
  })

  afterAll(() => {
    console.log('afterAll Se ejecuta al finalizar las pruebas');
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        UserService,
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();

    appComponent = TestBed.get(AppComponent);
    servicio = TestBed.get(UserService);
  }));

  afterEach(() => {
    console.log('afterEach');
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('El valor de myVar debe ser Hola Mundo', () => {
    const valor = appComponent.myVar;
    expect(valor).toEqual('Hola Mundo');
  });

  it('La variable saludo debe contener Carlos', () => {
    const valor = appComponent.saludo;
    expect(valor).toContain('Carlos');
  });

  it('Debe llamar a UserService y el metodo getAll() para obtener todos los usuarios',
    () => {
      let mockUser: User[] = [{
        login: "mojombo",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mojombo",
        html_url: "https://github.com/mojombo",
        followers_url: "https://api.github.com/users/mojombo/followers",
        following_url: "https://api.github.com/users/mojombo/following{/other_user}",
        gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
        starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
        organizations_url: "https://api.github.com/users/mojombo/orgs",
        repos_url: "https://api.github.com/users/mojombo/repos",
        events_url: "https://api.github.com/users/mojombo/events{/privacy}",
        received_events_url: "https://api.github.com/users/mojombo/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjI=",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/defunkt",
        html_url: "https://github.com/defunkt",
        followers_url: "https://api.github.com/users/defunkt/followers",
        following_url: "https://api.github.com/users/defunkt/following{/other_user}",
        gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
        starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
        organizations_url: "https://api.github.com/users/defunkt/orgs",
        repos_url: "https://api.github.com/users/defunkt/repos",
        events_url: "https://api.github.com/users/defunkt/events{/privacy}",
        received_events_url: "https://api.github.com/users/defunkt/received_events",
        type: "User",
        site_admin: false
      }];


      const users = spyOn(servicio, 'getAll').and.callFake(users => {
        return of(mockUser);
      });


      appComponent.ngOnInit();
      expect(users).toHaveBeenCalled();
    });
});
