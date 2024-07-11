// import { TestBed } from '@angular/core/testing';
// import { WorkoutService } from './workout.service';

// describe('WorkoutService', () => {
//   let service: WorkoutService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(WorkoutService);
//   });

//   afterEach(() => {
//     service.clearWorkoutEntries();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should add a workout entry', () => {
//     const initialLength = service.getWorkoutEntries().length;
//     const newEntry = { userName: 'Test User', workoutType: 'Cycling', workoutMinutes: 60 };
//     service.addWorkoutEntry(newEntry);
//     expect(service.getWorkoutEntries().length).toBe(initialLength + 1);
//     expect(service.getWorkoutEntries()).toContain(newEntry);
//   });

//   it('should return workout entries', () => {
//     const entries = service.getWorkoutEntries();
//     expect(entries).toBeTruthy();
//     expect(entries.length).toBe(0);
//   });

//   it('should clear workout entries', () => {
//     service.addWorkoutEntry({ userName: 'Test User', workoutType: 'Running', workoutMinutes: 10 });
//     service.clearWorkoutEntries();
//     expect(service.getWorkoutEntries().length).toBe(0);
//   });
// });






// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { WorkoutService } from './workout.service';
// import { Chart } from 'chart.js';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let workoutService: jasmine.SpyObj<WorkoutService>;

//   beforeEach(async () => {
//     const workoutServiceSpy = jasmine.createSpyObj('WorkoutService', ['getWorkoutEntries', 'addWorkoutEntry', 'deleteWorkoutEntry']);

//     await TestBed.configureTestingModule({
//       declarations: [ AppComponent ],
//       imports: [ FormsModule ],
//       providers: [
//         { provide: WorkoutService, useValue: workoutServiceSpy }
//       ]
//     }).compileComponents();

//     workoutService = TestBed.inject(WorkoutService) as jasmine.SpyObj<WorkoutService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;

//     workoutService.getWorkoutEntries.and.returnValue([
//       { id: '1', userName: 'John Doe', workoutType: 'Running', workoutMinutes: 30 },
//       { id: '2', userName: 'Jane Smith', workoutType: 'Yoga', workoutMinutes: 45 }
//     ]);

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should load workout entries on init', () => {
//     expect(component.workoutEntries.length).toBe(2);
//   });

//   it('should add a new workout entry', () => {
//     component.userName = 'Test User';
//     component.workoutType = 'Cycling';
//     component.workoutMinutes = 60;

//     component.onSubmit({ valid: true } as any);

//     expect(workoutService.addWorkoutEntry).toHaveBeenCalledWith({
//       userName: 'Test User',
//       workoutType: 'Cycling',
//       workoutMinutes: 60
//     });
//   });

//   it('should filter entries', () => {
//     component.searchTerm = 'John';
//     component.applyFilters();
//     expect(component.filteredEntries.length).toBe(1);
//   });

//   it('should change page', () => {
//     component.itemsPerPage = 1;
//     component.applyFilters();
//     component.changePage(1);
//     expect(component.currentPage).toBe(2);
//   });

//   it('should update chart when selecting a user', () => {
//     spyOn(Chart.prototype, 'destroy');
//     spyOn(Chart, 'register');
//     component.selectUser('John Doe');
//     expect(component.selectedUser).toBe('John Doe');
//     expect(Chart.register).toHaveBeenCalled();
//   });

//   it('should get number of workouts for a user', () => {
//     const count = component.getNumberOfWorkouts('John Doe');
//     expect(count).toBe(1);
//   });

//   it('should get total workout minutes for a user', () => {
//     const total = component.getTotalWorkoutMinutes('John Doe');
//     expect(total).toBe(30);
//   });
// });






// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { WorkoutService } from './workout.service';
// import { Chart } from 'chart.js';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let workoutService: jasmine.SpyObj<WorkoutService>;

//   beforeEach(async () => {
//     const workoutServiceSpy = jasmine.createSpyObj('WorkoutService', ['getWorkoutEntries', 'addWorkoutEntry', 'deleteWorkoutEntry']);

//     await TestBed.configureTestingModule({
//       declarations: [ AppComponent ],
//       imports: [ FormsModule ],
//       providers: [
//         { provide: WorkoutService, useValue: workoutServiceSpy }
//       ]
//     }).compileComponents();

//     workoutService = TestBed.inject(WorkoutService) as jasmine.SpyObj<WorkoutService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;

//     workoutService.getWorkoutEntries.and.returnValue([
//       { id: '1', userName: 'John Doe', workoutType: 'Running', workoutMinutes: 30 },
//       { id: '2', userName: 'Jane Smith', workoutType: 'Yoga', workoutMinutes: 45 }
//     ]);

//     // Mock the chart canvas
//     const canvas = document.createElement('canvas');
//     spyOn(component['elementRef'], 'nativeElement').and.returnValue({ querySelector: () => canvas });

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should load workout entries on init', () => {
//     expect(component.workoutEntries.length).toBe(2);
//   });

//   it('should add a new workout entry', () => {
//     component.userName = 'Test User';
//     component.workoutType = 'Cycling';
//     component.workoutMinutes = 60;

//     component.onSubmit({ valid: true } as any);

//     expect(workoutService.addWorkoutEntry).toHaveBeenCalledWith({
//       userName: 'Test User',
//       workoutType: 'Cycling',
//       workoutMinutes: 60
//     });
//   });

//   it('should filter entries', () => {
//     component.searchTerm = 'John';
//     component.applyFilters();
//     expect(component.filteredEntries.length).toBe(1);
//   });

//   it('should change page', () => {
//     component.itemsPerPage = 1;
//     component.applyFilters();
//     component.changePage(1);
//     expect(component.currentPage).toBe(2);
//   });

//   it('should update chart when selecting a user', () => {
//     spyOn(Chart, 'register');
//     component.selectUser('John Doe');
//     expect(component.selectedUser).toBe('John Doe');
//     expect(Chart.register).toHaveBeenCalled();
//   });

//   it('should get number of workouts for a user', () => {
//     const count = component.getNumberOfWorkouts('John Doe');
//     expect(count).toBe(1);
//   });

//   it('should get total workout minutes for a user', () => {
//     const total = component.getTotalWorkoutMinutes('John Doe');
//     expect(total).toBe(30);
//   });
// });





// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { WorkoutService } from './workout.service';
// import { Chart } from 'chart.js';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let workoutService: jasmine.SpyObj<WorkoutService>;

//   beforeEach(async () => {
//     const workoutServiceSpy = jasmine.createSpyObj('WorkoutService', ['getWorkoutEntries', 'addWorkoutEntry', 'deleteWorkoutEntry']);

//     await TestBed.configureTestingModule({
//       declarations: [ AppComponent ],
//       imports: [ FormsModule ],
//       providers: [
//         { provide: WorkoutService, useValue: workoutServiceSpy }
//       ]
//     }).compileComponents();

//     workoutService = TestBed.inject(WorkoutService) as jasmine.SpyObj<WorkoutService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;

//     workoutService.getWorkoutEntries.and.returnValue([
//       { id: '1', userName: 'John Doe', workoutType: 'Running', workoutMinutes: 30 },
//       { id: '2', userName: 'Jane Smith', workoutType: 'Yoga', workoutMinutes: 45 }
//     ]);

//     // Mock the chart canvas
//     const canvas = document.createElement('canvas');
//     spyOn(component['elementRef'], 'nativeElement').and.returnValue({ querySelector: () => canvas });

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should load workout entries on init', () => {
//     expect(component.workoutEntries.length).toBe(2);
//   });

//   it('should add a new workout entry', () => {
//     component.userName = 'Test User';
//     component.workoutType = 'Cycling';
//     component.workoutMinutes = 60;

//     component.onSubmit({ valid: true } as any);

//     expect(workoutService.addWorkoutEntry).toHaveBeenCalledWith({
//       userName: 'Test User',
//       workoutType: 'Cycling',
//       workoutMinutes: 60
//     });
//   });

//   it('should filter entries', () => {
//     component.searchTerm = 'John';
//     component.applyFilters();
//     expect(component.filteredEntries.length).toBe(1);
//   });

//   it('should change page', () => {
//     component.itemsPerPage = 1;
//     component.applyFilters();
//     component.changePage(1);
//     expect(component.currentPage).toBe(2);
//   });

//   it('should update chart when selecting a user', () => {
//     spyOn(Chart, 'register');
//     component.selectUser('John Doe');
//     expect(component.selectedUser).toBe('John Doe');
//     expect(Chart.register).toHaveBeenCalled();
//   });

//   it('should get number of workouts for a user', () => {
//     const count = component.getNumberOfWorkouts('John Doe');
//     expect(count).toBe(1);
//   });

//   it('should get total workout minutes for a user', () => {
//     const total = component.getTotalWorkoutMinutes('John Doe');
//     expect(total).toBe(30);
//   });
// });










// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { ElementRef } from '@angular/core';
// import { Chart } from 'chart.js';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let mockElementRef: jasmine.SpyObj<ElementRef>;

//   beforeEach(async () => {
//     mockElementRef = jasmine.createSpyObj('ElementRef', [], {
//       nativeElement: {
//         querySelector: jasmine.createSpy('querySelector').and.returnValue(document.createElement('canvas'))
//       }
//     });

//     await TestBed.configureTestingModule({
//       declarations: [ AppComponent ],
//       imports: [ FormsModule ],
//       providers: [
//         { provide: ElementRef, useValue: mockElementRef }
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;

//     // Mock localStorage
//     spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([
//       { userName: 'John Doe', workoutType: 'Running', workoutMinutes: 30 },
//       { userName: 'Jane Smith', workoutType: 'Yoga', workoutMinutes: 45 }
//     ]));

//     spyOn(localStorage, 'setItem');

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should load workout entries on init', () => {
//     expect(component.workoutEntries.length).toBe(2);
//   });

//   it('should add a new workout entry', () => {
//     spyOn(component, 'updateChart');
//     component.userName = 'Test User';
//     component.workoutType = 'Cycling';
//     component.workoutMinutes = 60;

//     component.onSubmit({ valid: true } as any);

//     expect(component.workoutEntries.length).toBe(3);
//     expect(localStorage.setItem).toHaveBeenCalled();
//     expect(component.updateChart).toHaveBeenCalled();
//   });

//   it('should filter entries', () => {
//     component.searchTerm = 'John';
//     component.applyFilters();
//     expect(component.filteredEntries.length).toBe(1);
//   });

//   it('should change page', () => {
//     component.itemsPerPage = 1;
//     component.applyFilters();
//     component.changePage(1);
//     expect(component.currentPage).toBe(2);
//   });

//   it('should update chart when selecting a user', () => {
//     spyOn(Chart.prototype, 'destroy');
//     spyOn(Chart, 'register');
//     spyOn(component, 'updateChart');

//     component.selectUser('John Doe');

//     expect(component.selectedUser).toBe('John Doe');
//     expect(component.updateChart).toHaveBeenCalled();
//   });

//   it('should get number of workouts for a user', () => {
//     const count = component.getNumberOfWorkouts('John Doe');
//     expect(count).toBe(1);
//   });

//   it('should get total workout minutes for a user', () => {
//     const total = component.getTotalWorkoutMinutes('John Doe');
//     expect(total).toBe(30);
//   });
// });












import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockElementRef: jasmine.SpyObj<ElementRef>;

  beforeEach(async () => {
    mockElementRef = jasmine.createSpyObj('ElementRef', [], {
      nativeElement: {
        querySelector: jasmine.createSpy('querySelector').and.returnValue(document.createElement('canvas'))
      }
    });

    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: ElementRef, useValue: mockElementRef }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([
      { userName: 'John Doe', workoutType: 'Running', workoutMinutes: 30 },
      { userName: 'Jane Smith', workoutType: 'Yoga', workoutMinutes: 45 }
    ]));

    spyOn(localStorage, 'setItem');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load workout entries on init', () => {
    expect(component.workoutEntries.length).toBe(2);
  });

  it('should add a new workout entry', () => {
    spyOn(component, 'updateChart');
    component.userName = 'Test User';
    component.workoutType = 'Cycling';
    component.workoutMinutes = 60;

    const mockForm = {
      valid: true,
      resetForm: jasmine.createSpy('resetForm')
    };

    component.onSubmit(mockForm as unknown as NgForm);

    expect(component.workoutEntries.length).toBe(3);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(component.updateChart).toHaveBeenCalled();
    expect(mockForm.resetForm).toHaveBeenCalled();
  });

  it('should filter entries', () => {
    component.searchTerm = 'John';
    component.applyFilters();
    expect(component.filteredEntries.length).toBe(1);
  });

  it('should change page', () => {
    component.itemsPerPage = 1;
    component.applyFilters();
    component.changePage(1);
    expect(component.currentPage).toBe(2);
  });

  it('should update chart when selecting a user', () => {
    spyOn(Chart.prototype, 'destroy');
    spyOn(Chart, 'register');
    spyOn(component, 'updateChart');

    component.selectUser('John Doe');

    expect(component.selectedUser).toBe('John Doe');
    expect(component.updateChart).toHaveBeenCalled();
  });

  it('should get number of workouts for a user', () => {
    const count = component.getNumberOfWorkouts('John Doe');
    expect(count).toBe(1);
  });

  it('should get total workout minutes for a user', () => {
    const total = component.getTotalWorkoutMinutes('John Doe');
    expect(total).toBe(30);
  });

  it('should reset form', () => {
    const mockForm = {
      resetForm: jasmine.createSpy('resetForm')
    };
    component.userName = 'Test';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    component.resetForm(mockForm as unknown as NgForm);

    expect(mockForm.resetForm).toHaveBeenCalled();
    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBe(0);
  });

  it('should reset form manually if resetForm is not available', () => {
    const mockForm = {};
    component.userName = 'Test';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    component.resetForm(mockForm as unknown as NgForm);

    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBe(0);
  });
});
