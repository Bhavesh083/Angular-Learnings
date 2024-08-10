Commands:-
- To install Angular, we need node (download from browser), node -v & npm -v to get version name.
- Install Angular -> npm install -g @angular/cli
- Create new angular app -> ng new app_name & use --no-standalone for having module created.
- Run angular app -> ng serve
- Create component -> ng g c component_name
- Create pipes -> ng g p pipe_name
- Create module -> ng g m module_name
- Create service -> ng g s service_name
- Create guard -> ng g guard auth_name

- Latest version of angular is v18 (2024 release)    
 
Pending Angular Topics:-
Forms, Modules, Lifecyclehooks, guards, DI, local storage
ngRx (state management), unit test (karma/jasmine), httpClient, lazy loading of components, rxJS, Toasters, Interceptors

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::::::::::::::::::::::::::::::Notes::::::::::::::::::::::::::::::


Module:
- It is a mechanism to group all related components, directives, pipes and services, in such a way that can be combined with other modules to create an application.
- A module.ts file contains a decorator called as @ngModule, it contains
- The declarations describes which declarables likes components, services, pipes belong to that module.
- The Import tells Angular about other NgModules that is used in this particular module.
- The providers array is where you list the services the application needs. 
- The bootstrapping process creates the component(s) listed in the bootstrap array and inserts each one into the browser DOM, if it finds an element matching the component's selector.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Components:
- It is a basic building block of an angular application, where it contains the set of related features.
- It is made up of a type script class, html template, CSS styles.
- A selector is basically a custom tag that is used to render a component.
- It contains a decorator called @component which is used to define meta data.
- encapsulation: ViewEncapsulation.None - then styles applies to all components in app, .Emulated - then style applies only in defined component. (default is emulated)
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
              - Object with style names as property and values as style values.  ex: {'margin' : '20px', 'font-family' : 'Impact'}   {[ngClass] -> it can be used when using object}

- Event Binding:
  - Process of binding the events such as user's actions to a method in a component. 
  - Syntax is (eventname)="method()"
  - we can pass $event as parameter to method.

- Template Reference Variables:-
   - This variable holds the reference of that html element. It is a unique variable assigned to a html element. 
   - help you to use data from one part of a template in another part of the template.
   - #, to declare a template variable.  & we can pass values to method using #variablename.value

- Two Way Binding:
   - It is basically the combination of property binding with event binding:
   - ngModel is used to achieve two way binding, syntax is banana in a box: [(ngModel)]="variable"    --> [] property binding+ ()  event binding
   - ngModel is in a module called FormsModule,, so import it and add it to imports array in module file. 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

ng-content: 
- any children of component host element are rendered at location of <ng-content>
- it is a special placeholder that tells angular where to render content.
- multiple content placeholders can be used by using select attribute.
ex:- in parent component, <app-child> <card-title>hello</card-title> <app-child>
       in child component, <ng-content select="card-title></ng-content>

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

HTTP:   service ---> GET call ---> Request  ---> DB
      service <-- Observables <-- Response <-- DB



-----------> Observer subcribes the observables to listen for new data <------------

Observables:
              It is a function that converts ordinary stream of data into observable stream of data. you can think as a wrapper around the ordinary stream of data.
              It is a mechanism to handle asynchronous operations and data streams. It is lazy as it emits values when time progresses.
              It doesn't wait for complete data to be available, when data is partially available it will send to observer.

Observer: It is consumer of values delivered by an observable using subscribe.

Subscribe: It is a method which listens to observables and fetches data. The subscribe() method calls the observables function that emits the data.
                   -the subscribe call takes three optional arguments. next, error & complete.

- all these belongs to rxjs library 

ex: in service, 
     getData() : Observable<employee[]>{
              return this.http.get<employee[]>("URL");
     }
      in component.ts,
     serviceObject.getData().subscribe( data => x = data );

------------------------------
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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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




















