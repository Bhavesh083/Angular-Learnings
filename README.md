Commands:-
- To install Angular, we need node (download from browser), node -v & npm -v to get version name.
- Install Angular -> npm install -g @angular/cli
- Create new angular app -> ng new app_name & use --no-standalone for having module created.
- Run angular app -> ng serve
- Create component -> ng g c component_name
- Create directive -> ng g d dir_name.  
- Create pipes -> ng g p pipe_name
- Create module -> ng g m module_name
- Create service -> ng g s service_name
- Create guard -> ng g guard auth_name

- Latest version of angular is v18 (2024 release)    


:::::::::::::::::::::::::::::::CONTENTS::::::::::::::::::::::::::::::
1. Components
2. Bindings
3. Directives
4. Component Interaction
5. Pipes
6. Services
7. Dependency Injection
8. Routing
9. LifeCycle Hooks
10. Modules
11. Guards
12. Local Storage
13. Http Client
14. Error Handling
15. Interceptors
16. Forms
17. ngRX
18. UnitTesting
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Components:
- It is a basic building block of an angular application, where it contains the set of related features.
- It is made up of a type script class, html template, CSS styles.
- A selector is basically a custom tag that is used to render a component.
- It contains a decorator called @component which is used to define meta data.
- encapsulation: ViewEncapsulation.None - then styles applies to all components in app, .Emulated - then style applies only in defined component. (default is emulated)

ng-content: 
- any children of component host element are rendered at location of <ng-content>
- it is a special placeholder that tells angular where to render content.
- multiple content placeholders can be used by using select attribute.
ex:- in parent component, <app-child> <card-title>hello</card-title> <app-child>
       in child component, <ng-content select="card-title></ng-content>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Binding: It is a connection between model & html template

- Interpolation: {{ }} syntax
  - process of binding component data to a template or embedding expressions in a template. also called as one-way data binding
  - It is a technique to display dynamic data on html template.
  - Can use built-in JavaScript functions like {{ name. Length }}

- Property Binding:
  - Process of binding component data to properties of html element or directives to make it dynamic.
  - To bind to an element's property, enclose it in square brackets, 
  - Without the brackets, Angular treats the right-hand side as a string literal and sets the property to that static value.
    ex: <input [disabled]='variable' />

- Class Binding:
  - Process of binding component data to classes of html elements or directives to make it dynamic.
  - a. Single Class binding:
     ex: <p [class]="variable"  >                      ---> here, variable should be the class name
          <p [class. class name]="variable" >  ---> here, variable should be the Boolean
  - b. Multi Class binding:
     ex: <p [class]="variable">       
          ---> here, variable can be
                 - String of class names separated by spaces. ex: "classA classB classC"
                 - Object with class names as property and value as Boolean. ex: { 'class A' : true, 'class B' : false}    {[ngClass] -> it can be used when using object}
                 - Array with class names as strings. ex: ['class A', 'class B', 'class C']

- Style Binding:
  - Process of binding component data to styles of html elements or directives to make it dynamic.
  - a. Single Style binding:
    ex: <p [style. width]=" '7px' " or [style. width]="variable"  --> here, variable should be width value
  - b. Multi Class binding: 
    ex: <p [style]="variable">  
        --> here, variable can be 
              - String of styles separated by ;   ex: 'margin:15px ; font-family: Impact'
              - Object with style names as property and values as style values.  ex: {'margin' : '20px', 'font-family' : 'Impact'}   {[ngStyle] -> it can be used when using object}

- Event Binding:
  - Process of binding the events such as user's actions to a method in a component. 
  - Syntax is (eventname)="method()"
  - we can pass $event as parameter to method.

- Template Reference Variables:-
   - This variable holds the reference of that html element. It is a unique variable assigned to a html element. 
   - help you to use data from one part of a template in another part of the template.
   - #, to declare a template variable.  & we can pass values to method using #variablename.value

- Two Way Binding:
   - mechanism to make model & view in sync.
   - It is basically the combination of property binding with event binding:
   - ngModel is used to achieve two way binding, syntax is banana in a box: [(ngModel)]="variable"    --> [] property binding+ ()  event binding
   - ngModel is in a module called FormsModule,, so import it and add it to imports array in module file. 
   - [ngModel] is for one-way binding only as () is removed from syntax.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Directives:
- Attribute Directives : ngClass, ngStyle, ngModel    (refer all three in binding concepts)

- Structural Directives :
  a. ngIf:
       - Syntax is *ngIf="variable" , if the variable is true then the html element will be rendered else no.
       - <ng-template> can be used to render with then or else conditions.
          ex: *ngIf="variable; then one; else two"
                 <ng-template #one> **** </ng-template>   {this will be rendered if variable is true}
                 <ng-template #two> **** </ng-template>   {this will be rendered if variable is false}

  b. ngSwitch:
       - Syntax is [ngSwitch]="variable" & *ngSwitchCase=" 'x' " 
       - The parent element should have [ngSwitch] & it's child elements should have *ngSwitchCase or *ngSwitchDefault for default.
       - Ex: 
              <div [ngSwitch]="colour">
                      <p *ngSwitchCase=" 'red' "> Red </p>   {this will be rendered if colour variable is red}
                      <p *ngSwitchCase=" 'blue' "> Blue </p>  {this will be rendered if colour variable is blue}
                      <p *ngSwitchDefault> Green </p>  {this will be rendered if colour variable is not matching with any case}
              </div> 

  c. ngFor:
       - Syntax is *ngFor="let x of y"
       - we can also have index, even, odd, first & last by separating them with ;
       - Example:-
         <div class="Example1" *ngFor="let item of Items; let i = index; let even = even; let odd = even; let first = first; let last = last;">
                  <p [style. color]=" even? 'red' : 'orange' ">{{i}} is {{item}}</p>
         </div>
       - trackby:  
                         - The trackBy function is an optimization technique in Angular used with ngFor, that allows you to specify a unique identifier for each item in the list. 
                         - to track changes and update only the necessary  parts of the DOM when the list changes.

Custom Directives: 
   - Advantage is code reusability.
   step1: create a directive -> ng g d name.  
   step2: Import necessary modules like,
       - ElementRef is used to inject a reference to the DOM element.
       - HostListener is used to subscribe to events of DOM element.
       - Input is used to take property values passed.

- Custom Attribute Directive Examples:-
  a) create a directive to set color when hovered.
    <p directiveName>Hi</p>   & Inject ElementRef to constructor
    constructor(private er : ElementRef) {}   
    @HostListener('mouseover')
       onMouseOver(){
            this.er.nativeElement.style.backgroundColor = 'red';
       }

  b) pass one property value:    can pass values in below formats
      - ex1:  <p directiveName [color]=" ' red' " > & @Input() color; 
      - ex2:   <p directiveName [color]=" 'red' " >  & @Input('color') getColor;
      - ex3:   <p [directiveName] =" 'red' " > & @Input('directiveName') getColor;

  c) pass two properties:
      - ex1: <p directiveName [color]=" 'red' "  [margin]=" '5px' " >  & @Input() color;  @Input() margin;
      - ex2: <p directiveName [color]=" 'red' "  [margin]=" '5px' " >  & @Input('color') getColor;  @Input('margin') getMargin;
      - ex3: if you have multiple properties for one directive, then we can pass directiveName in one property max & others as usual.
                <p [directiveName]=" 'red' "  [margin]=" '5px' " >  & @Input('directiveName') getColor;  @Input() margin;  


- Custom Structural directive Examples:-
  a) Create a directive to clone ngIf.
      - TemplateRef & ViewContainerRef are injected to constructor.
      - TemplateRef is reference to ng-template in component.
      - ViewContainerRef is a container that provided us access to angular's view .
           - createEmbeddedView is used to display
           - clear is used to remove the content.
      - make the @Input as setter to take values and run directive whenever the value is changed in html template.

      ex: @Input() set cloneIf(x: boolean){  this.renderElement(x); }
             constructor(private tempRef : TemplateRef<unknown>, private viewRef : ViewContainerRef) { }
             renderElement(x : boolean){
                  if(x){
                        this.viewRef.createEmbeddedView(this.tempRef); 
                   } 
                   else {
                        this.viewRef.clear();
                   }
              }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Component Interaction:
  - Passing data from Parent to Child Component:-
    - assign the variable to a property that is declared in child component.  Syntax:-  <child  [name]="variable"></child>
    - use @Input() decorator to property declared in child component.     Syntax: @Input() name;
    - or, you can pass the property name in @Input('property') and bind it to different variable. ex: @Input('name') person;

  - From Child component to Parent Component:-
    - Events should be used in this case, we have to pass it as an event from child component.
    - so use Event Emitter output object & Emit method to fire the event,   Syntax:- @Output() name = new Event Emitter();  &  this. name. emit('pass');
    - capture the event using (event name)="variable=$event" in parent component.

   ----------but not working---------------
  - @Input() has properties like a. Alias:"name" b. required:boolean c. transform: (value:string) => value.toUpperCase() 
        (or) can call a method also like transform: methodname 
         inbuilt transform functions: transform: booleanAttribute or numberAttribute.
  - @input can also be a setter and getter.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Pipes:

- Pipes are functions that are used to transform data in templates. Pipes can take additional parameters that configure the transformation. Parameters can be optional or required.
- Syntax : {{ variable | pipe name }}
- You can create your own custom pipes to expose reusable transformations in templates. 
- The following are commonly used built-in pipes for data formatting:
   for strings:-  Upper Case , Lower Case, Title Case , slice : x : y , Json Pipe
   for number:- number: 'count before point . min - max' pipe,  
                        percent, Currency  ex: currency or currency: 'EUR' or currency:'EUR': 'code'    ex:- {{Amount  | Currency  : 'INR' : 'Code'}}
   for dates:- Date Pipe, ex: date:'short' or date:'shortDate' or date:'shortTime' or medium or mediumdate or mediumtime or longtime or longdate or long.

- Pure & Impure Pipes:  
      - Pure pipes in angular are the pipes that execute when it detects a pure change in the input values.
        A pure change is when the change detection cycle detects a change to primitive input values or object reference but not the properties.
      - Impure pipes in angular are the pipes that execute when it detects an impure change in the input value. 
        An impure change is when the change detection cycle detects a change to composite objects, such as adding an element to the existing array.

- Custom Pipe: Steps to Create a pipe:-
   a) run command ng g p name b) set the name of pipe & pure/impure in @pipe decorator 
   c) set transform method with value as parameter & can define additional parameters & also default values. ex:- transform(value: number[], x : number = 5, y : number = 10): number[] return ....}
   d) You can pass more than one argument to the pipe by separating each argument by a : colon.

- Async Pipe: - It automatically subscribes to observables or promises and also unsubscribes when component is destroyed to prevent memory leaks.
                       - It will mark the template to be checked for changes when it receives a new value when change detection is set to on push.
                       - ex:- ????????????????????????

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Services:  
- It is a singleton object or typically a class that contains functions and variables that can be used by components throughout application using dependency injection.
- It's purpose is to maintain modularity, re-usability, application logic.
- singleton object is a design pattern where it ensures that only one instance of the service is created and used throughout the application.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Dependency Injection:
- It is a process of injecting all the dependencies that a class needs.
- when angular creates a new instance of a component or pipe or directive class, it determines which services or other depencies that class needs by looking at constructor parameter types.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Routing:-

- It requires, app.routing.module file & index.html should have <base href="/"> &  AppRouting Module in Imports array of app.module file.
- we define routes in Routes array of routing.module file.
  ex: = [ { path : xxx , component : xxx}, {}, {} ]
- it is rendered wherever the <router-oulet> tag is available.
- routerLink property is used to redirect.

- as we import components both in routing file & module file,
  create an array containing all components in routing file & import it in module file, so we can prevent importing two times.

- WildCards:-  { path : ** , component : pagenotfound }
  - always should be last route in array.
  - can be used in case of page not found/

- Navigation:- { path : '', redirectTo : '/services', pathMatch: 'full'},
   - used to redirect if string matches as per pathMatch: full or prefix.

- Route Parameters:-
  - pass parameters to URL using Router module,
     a. inject it in constructor & use navigate method to pass.
           ex: router.navigate( [ '/employees', employee.id , x, y etc..] );
     b. set path in Routes to take parameter.
           ex: path : 'services/:id' 
  - read parameters of URL using ActivatedRoute module,
     a. inject it in constructor & use snapshot.paramMap.get('paramname') to fetch.
           ex: actroute.snapshot.paramMap.get('paramname');
         but if we use snapshot approach, latest changes will not be retrieved because of OnInt as only when component is initialized it rerieves the param.
                           (OR)
     b. to overcome above issue, we use paramMap observable of activated route.
            ex: actroute.paramMap.subscribe( (params: ParamMap) =>{
                               let id = params.get('id');
                   } );
          - here, paramMap is Observable, so we used subcribe.

 - Optional Route Parameters:-
       pass value as key value to naviagate method & no need to define path in Routes as its optional.
         ex:  router.navigate(['/employees', {id: employee.id} ]);

 - Relative Navigation:-
       before we used to pass both path & params in navigate method,
       now we just pass params to navigate method & also use relativeTo
             ex: router.navigate( [params] , {relativeTo: this.route} );

       also, we can go back one route using '../'
             ex: router.navigate( ['../', params ], {relativeTo: this.route} );

 - Child Routes:-
       use the children property as an array  having childs as a path & component again.
           ex: { path , component, children : [ { path, component}, {..}, {..}] }
        use the <router-outlet> in parent component to display child comps in it.
        the URL should be like /main/child

- Refer modules section for ""routing in modules"".

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

LifeCycle Hooks:-
- These are simply the methods that are executed at a certainlifecycle of a component.
- Order: Constructor -> onChange -> onInit -> doCheck -> ngAfterContentInit -> ngAfterContentChecked -> ngAfterViewInit -> ngAfterViewChecked -> onDestroy.

- onChange is executed when any data-bound input property changes. It then notifies you when an input property changes and provides the current and previous values
- onChange uses Simplechanges object to track.
  eg: onChange(changes: SimpleChange){
             let x = changes['property_name'];
             clg(x.previousChange() or x.firstChange() or x.currentChange());
         }
  
- doCheck is executed after every change detection cycle no matter where the change has occured.
  it checks any data of component.
  also used when change detection is needed when an array or object is modified because onChange can't detect changes of array or objects.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Modules:
- It is a mechanism to organize an application & maintain modularity by grouping all related components, directives, pipes and services as an unit.

- A module.ts file contains a decorator called as @ngModule, it contains
- The declarations describes which declarables likes components, services, pipes belong to that module.
- The Import tells Angular about other NgModules that is used in this particular module.
- The providers array is where you list the services the application needs. 
- The bootstrapping process creates the component(s) listed in the bootstrap array and inserts each one into the browser DOM, if it finds an element matching the component's selector.

Common Types of Modules:
 - App Module : Referred as root module & is the entry point module.
 - Core Module : Provides singleton services. Any components, pipesm directives that is used only once in app. Ex:- Navbar or footer that is called once in our app component.
 - Shared Module : Common Ui components, pipes or directives that are going to be used in many modules.
 - Feature Module : Allows you to break the app into individual units by feature.
 - Routing Module : Used when your app needs to have multiple pages.

Routing in Modules:- 
- 1st way: 
      simply you can add all paths in root routing file i.e app.routing file.
- 2nd way: 
      you can create a routing file in each module and add routes there & import this routing file in its module.ts file & import this module in main app module.
      also change RouterModule.forRoot() to .forChild()
      import AppRouting module at last in main module.ts file, else module routes don't work.
- 3rd way:
      - Lazy loading
      -  Modules that are lazy loaded will be loaded only when the user navigates to their routes.

                  ------------------* IMPORTANT *-----------------

Lazy loading of Modules through routing:

- Process of loading components or modules or other assets of a website as they are required. 
- It helps in decreasing start up time.
- Since Angular is SPA, by default angular eagarly loads all modules when starting the application. This means that a lot of unneccessary libraries or modules might be loaded as well.
- With lazy loading, our app does not need to load everything at once, only needs to load what the user expects to see when the app first loads.
- Modules that are lazy loaded will be loaded only when the user navigates to their routes.

- To lazy load modules, use "loadChildren" instead of components in routes of your app.routing file.
  loadChildren expects a function that uses dynamic import syntax to import your lazy loaded module only when its needed.
- "remove imported module from app.module.ts file. (as we are importing only when needed, else it will load at startup)"

  ex: { path : 'crud' , loadChildren : () => import('./modules/crud/crud.module').then(m => m.CrudModule) },

  open console and network, notice only when you routed to crud, crud chunk is loaded.

- You can only lazy load standalone components & not normal components.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


GUARDS: 

  It is a mechanism to control access to certain parts of application to specific users.
- Used to control whether users can navigate to or away from the current route.
- Allow access to certain parts of the application to specific users.

CanActivate:
- this guard decides if a route can be activated or not, it allows us to cancel the navigation.
- One of the use cases of this guard is to check if the user has logged in to the system. If the user has not logged in, then the guard can redirect him to the login page.

CanActiveChild:
- used to guard the child routes.
- instead of attaching CanActivate guard to all child routes, simply attach canactivatechild parent route only.

CanDeactivate:
- This Angular Guard decides if the user can leave the component (navigate away from the current route). 
- This route is useful when the user might have some pending changes, which is not yet saved. 
- allows us to ask for user confirmation before leaving the component.  

Resolve:
- This guard delays the activation of the route until some tasks are complete. 
- You can use the guard to pre-fetch the data from the backend API before activating the route.

CanLoad:
- The CanLoad Guard prevents the loading of the Lazy Loaded Module.
- We generally use this guard when we do not want to unauthorized users to be able even to see the source code of the module.

CanMatch:
- Used when we want to have the same route go to different places. i.e same path but different components.
- ex: { path : 'login', component : x, canMatch : [condition] }, { path : 'login', component : y, canMatch : [condition] }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Local Storage:-
- There are essentially three ways to store information for usage in your Angular app: as variable, as local storage, or on a database.
- When you store as variable, it will disappear as the user refresh the page. 
  When you store as local storage, it will remain as the user comes back. 
  Finally, on a database, it will persist. Each option should be used accordingly.

- Local storage is a way to store data on the client’s computer using key and value pairs in a web browser. 
  The best thing about local storage is that there’s no expiration date for the data stored in local storage, but we can always delete it using its clear() function.

- open console -> application, there you can find the data stored in local storage.

- Create a Service (Optional but Recommended): It’s a good practice to encapsulate interactions with local storage in a service for better organization and reusability.

methods:- setItem(key, value) , getItem(key) , removeItem(key) , clear() - it clears all local storage.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

      service ---> GET call ---> Request  ---> DB
      service <-- Observables <-- Response <-- DB

-----------> Observer subcribes the observables to listen for new data <------------

Observables:
              It is a mechanism to handle asynchronous operations and data streams. It is lazy as it emits values when time progresses.
              It doesn't wait for complete data to be available, when data is partially available it will send to observer.
              It is a function that converts ordinary stream of data into observable stream of data. you can think as a wrapper around the ordinary stream of data.

Observer: It is consumer of values delivered by an observable using subscribe.

Subscribe: It is a method which listens to observables and fetches data. The subscribe() method calls the observables function that emits the data.
                   -the subscribe call takes three optional arguments. next, error & complete.

- all these belongs to rxjs library 

ex: in service, 
     getData() : Observable<employee[]>{
              return this.http.get<employee[]>("URL");
     }
      in component.ts,
     service.getData().subscribe( data => x = data );

*************************
Http Client :- It is a module in angular to send requests & get responses from API's.

HTTP Methods:-

GET:- To fetch details

POST:- To create
Since we are sending data as JSON, we need to set the 'content-type': 'application/json' in the HTTP header. 
The JSON.stringify(person) converts the person object into a JSON string.

PUT:- To update
PATCH:- To update partially
DELETE:- To delete


options to pass with URL:- 

- headers contain metadata in key-value pairs that are sent along with HTTP requests and responses. They can be used to define caching behavior, facilitate authentication, and manage session state. You can make use of the Http Interceptor to set the common headers.
   pass like: headers?: HttpHeaders | { [header: string]: string | string[]; };
   ex:  create a new header object & set
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

- params: set query strings / URL parameters     pass like:-  params?: HttpParams | { [param: string]: string | string[]; };
   ex:   create new param object & set
       const params = new HttpParams()
      .set('sort', "description")
      .set('page',"2");

- observe: This option determines the return type.   EX:- observe?: "body|events|response|";
- responseType: The value of responseType determines how the response is parsed.   EX:- responseType: "arraybuffer|json|blob|text";
- reportProgress: Whether this request should be made in a way that exposes progress events.  EX:- reportProgress?: boolean; 
- withCredentials: Whether this request should be sent with outgoing credentials (cookies).  EX:- withCredentials?: boolean; 
-------------------------------X-------------------------------------X--------------------------------------------

Error Handling:-

We can catch the HTTP Errors at three different places :-  Component, Service, Globally

In JavaScript, we use a try-catch to validate a piece of code, and if something comes with an error, it catches.
But the try-catch is useless with our rxjs code because the errors happen in the subscribe scope, so try-catch doesn't solve anything, so we need to use Rxjs operators.

In Components, you can handle like:
.subsribe({
 next: (x) => {}, 
 error: (e) => {},
 complete: () => console.log("done");
})

In Service, we can catch and pass it to subsribed method.
.pipe( catchError( err => { 
           return throwError(err);
 } ))

we can also use retry, timeout methods to call the get request again.


------------------------------------X-------------------------------------X--------------------------------------------


INTERCEPTORS:-

- it is a middleware btw application & backend that intercepts the requests and responses.
- it is basically used to add the common things to requests like headers like passing the tokens for authentication.
- used for logging, authentication, error handling
- When the response (HttpResponse) arrives from the back end the Interceptors can transform it before passing it to our application.

- class implements HttpInterceptor & it implements intercept method.
- In intercept method we can do anything to the request & use handler to pass request to next step.
- two parameters passed to an intercept method is HttpRequest & HttpHandler.
- add the interceptor to the providers array like:
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
]

- use map or catch to track requests, response, errors.

example:-

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        return throwError(err);
      }),
      map( (event : HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          console.log("got response"+ JSON.stringify(event));
        }
        return event;
      })
    );
  }


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

FORMS :-

- In Angular, we have two types of forms: i) Template driven forms ii) Reactive forms.

i) Template driven:
- most of the code is written in html
- two way data binding with ngModel directive.
- Bulky html & minimal component code.
- unit testing is a challenge.
- less readability

a. ngForm is assigned to template reference variable of form.
<form  #formName = "ngForm">

b. To bind data to ngForm, use ngModel directive along with name attribute
<input ngModel name="email"/> 

c. Binding data to a variable/model, use [(ngModel)] directive
<input [(ngModel)] = "email"/>

d. ngModelGroup is used to group the form fields, contains a set of ngModel's.
<div ngModelGroup="address">
     <input name="state" ngModel/>
     <input name="city" ngModel/>
</div>

e. Track State & validity of the controls.
- When form is loaded, states of a control will be Valid, Untouched, Pristine.
- these states are actually the classes which are implicitly added.
- to Access these states, create a template reference variable with value as ngModel & now, you can get state using variable.state
ex: <input ngModel #name='ngModel' />
      {{name.valid}}

f. Submit form:
- formvariable.form.valid checks if form is valid or not.
- ngSubmit event is called when you click submit button in a form.


SUMMARY:-
- To bind form controls to a model, Use [(ngModel)]="variable"
- To bind form controls to ngForm, Use ngModel & name="somename"
- To get state of the controls, Use ngModel & #name="ngModel"
- To get entire form details, Use #formName = "ngForm"
- To submit, Use (ngSubmit)="method()"


-----------------------------X-------------------------------------X-------------------------------------


ii) Reactive forms or Model Driven forms:
- most of code & logic resides in class & - more readability.
- choose it when with complex forms, complex & custom validations, unit testing is necessary.

- import Reactiveforms module

a. An entire form is represented as a formgroup & aach field is represented as formcontrol.
 In Model ->
 sampleForm = new FormGroup({
    name: new FormControl('defaultvalue'),
    password: new FormControl(' '),
    confirmPassword: new FormControl(' '),
 });
 In Template ->
 On form tag, [formGroup] = "sampleForm"
 On control tag, formControlName = "name"

b. To group the form controls, use nested FormGroup(), like we use ngModelGroup in TDF.
     In model -> 
          we create a nested formgroup object to group controls,
          address = new FormGroup({}),
     In template -> 
          define formGroupName="address",
          <div formGroupName="address"> controls  </div>
  
c. To set formControl values, use setValue method or patchValue methods.
     we can use patchValue when setting values for few controls.
     this.sampleForm.setValue({
            name: 'Bhavesh', password: 'test', confirmPassword: 'test',
            address: {
                 city: 'Nellore', state: 'AP'
             }
     });
   
d. FormBuilder service:
    - It provides shortcuts to create the instance of the FormControl, FormGroup or FormArray.
    - It reduces the code required to write the complex forms.
    - inject it to constructor as its a service

    - 1st value in array is default value,
     sampleForm = this.fb.group({
         name: ['Bhavesh'], password: [''], confirmPassword: [''],
         address: this.fb.group({
                  city: ['Nellore'], state: ['AP']
         })         
     })

    - 2nd value is Validators rules,
          name: ['Bhavesh', [Validators.required, Validators.minLength(3), ...]]

e. To access the states of form controls,
    In template -> sampleForm.get('name').state
    To check if errors object exists,
       sampleForm.get('name').errors?.validations

f. Submit form:
  - check if form is valid or else disable submit button, -> "sampleForm.valid"
  - add (ngSubmit) to form tag & assign a method to it.
  - simply use sampleForm.value to see values.

g.  Custom Validation & Cross field Validation:-
- return null if validation is true.
- Abstractcontrol is the parent class of formgroup, formcontrols etc.
- ex:- put validator name in model & 
export function passwordStrengthValidator(control : AbstractControl) : {[key:string]: any} | null
{
    var passwordLength = (control.value).length;
    return (passwordLength>7)? null : { 'passwordStrengthValidator': 'weak'};
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

NgRx: 

- NgRx is a library that provides reactive state management for Angular apps inspired by Redux.
- to install: ng add @ngrx/store@latest

- Key points to understand:-

State: Think of it as a snapshot of your "app’s data" at any moment. State refers to the data your app needs to manage and display.

Store: It’s like a big container that holds the entire app’s data/states.

Actions: 
- Actions are used to "describe state changes" in the application. 
- They are plain JavaScript objects with a type property that describes the action being performed & pay load (thats dispatched from component)

Reducers: 
- Reducers are pure functions that receive two arguments, the current State of the application & an Action object, it calculate the new state based on the Action that happened, and return that new State. 
- Everytime an action is dispatched, ngRx calls reducer function.

Selectors: These are like special tools to fetch specific pieces of data from the store when you need them.

Effects: 
- Effects are designed to extract any side-effects (such as Network calls) from components and handle potential race conditions.
- Effects are Observables listening for the inputs and piping them through the "prescription".
- Those inputs can either be values or Observables of values.
- Effects perform tasks, which are synchronous or asynchronous.

Flow:- Action is dispatched -> Reducer takes current state & returns new state -> new state is stored in store -> state is fetched using selectors.




--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Unit Testing:


ii. Spy - use SpyOn & also createSpyObj.
iii. Before each, Test bed, DI
 - use testbed for dependencies
iv. http
v. component
vi. dom interaction
vii. async
viii. promise
ix. pipes
x. custom directives
xi. routing
xii. code coverage

- command to execute tests: ng test
- use describe & it blocks to write test case.
- f & x are used to ignore or focus on particular test case.

Jasmine:
- It is a js testing framework that helps you write test cases in a human-readable way.
- Simply put, Jasmine allows us to write code that tests our functional code to achieve a specific requirement.

Karma:
- It is a test runner that executes the test we write with Jasmine.
- It also provides features like live reloading of test cases, code coverage reporting.


Spy: 
- spies focus on testing a particular unit without focusing on its dependencies.
- also used as a mock object which provides custom return value
  ex: SpyOn, we can use it to make any function return anything we want.
- also basically used to track a method or a class, like to determine if a method is called or how many times it was called & with what arguments etc.

- spyOn method:
 * It is used to stub a property of dependency & also mock the return value of it.
  * it stubs the original call, that means original method in dependency won't be called.
  * dependency object should be defined first and then we can use spyOn on it.
 * Unlike createSpyObj, we create object of the dependency & spy on it instead of creating mock object of it.

- Jasmine.createSpyObj:
 * It is used to create mock object of dependency that can spy on one or more methods of it.
 * We also mock the return values of the properties of a mock object.
 * Unlike spyOn, we do not create original reference of dependency, instead we create a mock object of it.

- Jasmine.createSpy:
 * It is used when there is no function to spy on or when call to original function would inflict a lag in time.
 * a dummy method is created & can track calls like a spyOn but there is no implementation.
 * not useful for mocking.


- BeforeAll or BeforeEach can be used to create common objects used in It.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


extra notes:-

-Typescript shorthand syntax for creating object:-
-simply pass public parameters to constructor inside class, it automatically creates variable and assign value when object is created.
-Basically, a pure function is a function that only receives arguments, calculates a result (that is always the same for the same arguments), and returns that result.
 Reducer is a pure function.


