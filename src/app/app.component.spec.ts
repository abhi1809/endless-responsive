import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'endless'`, () => {
    expect(component.title).toEqual('endless');
  });

  it('Building list of Steps', () => {
    //Tested with real time data. 
    let steps = [{"id":"d11b10ba-1cd8-48f8-93eb-454b716fd5a0","stepNumber":"2","versionContent":[{"title":"Request A Delivery","body":"Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.","effectiveDate":"2019-05-04T03:04:05.000Z"},{"title":"We Deliver","body":"Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.","effectiveDate":"2019-04-04T05:04:05.000Z"}]},{"id":"dce2554e-00dc-45c1-99c1-93a554d7eba7","stepNumber":"4","versionContent":[{"title":"Request Another Delivery","body":"Get your next gaming fix by updating your profile then initiating your next shipment.","effectiveDate":"2019-05-20T03:04:05.000Z"}]},{"id":"422e6b50-9c5a-43d5-90cb-839f4678cb75","stepNumber":"3","versionContent":[{"title":"Keep What You Like","body":"Tell us “no” by returning any unwanted products in the enclosed packaging.","effectiveDate":"2019-04-04T03:04:05.000Z"},{"title":"Keep What You Want","body":"Tell us “no thanks” by returning any unwanted products in the enclosed packaging.","effectiveDate":"2019-04-04T05:04:05.000Z"},{"title":"Keep Everything","body":"Tell us “no thanks” by returning any unwanted products in the enclosed packaging.","effectiveDate":"2019-02-04T08:04:05.000Z"}]},{"id":"d9a439d0-8dbf-4bab-8e08-626f8194a075","stepNumber":"1","versionContent":[{"title":"Fill Out a Profile","body":"We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.","effectiveDate":"2019-05-20T03:04:05.000Z"}]}];
    component.modifySteps(steps);
    let expectedOutput = [
      {
        "id": "d9a439d0-8dbf-4bab-8e08-626f8194a075",
        "stepNumber": "01",
        "versionContent": {
          "body": "We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.",
          "effectiveDate": "2019-05-20T03:04:05.000Z",
          "title": "Fill Out a Profile"
        }
      },
      {
        "id": "d11b10ba-1cd8-48f8-93eb-454b716fd5a0",
        "stepNumber": "02",
        "versionContent": {
          "body": "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
          "effectiveDate": "2019-05-04T03:04:05.000Z",
          "title": "Request A Delivery"
        }
      },
      {
        "id": "422e6b50-9c5a-43d5-90cb-839f4678cb75",
        "stepNumber": "03",
        "versionContent": {
          "body": "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
          "effectiveDate": "2019-04-04T05:04:05.000Z",
          "title": "Keep What You Want"
        }
      },
      {
        "id": "dce2554e-00dc-45c1-99c1-93a554d7eba7",
        "stepNumber": "04",
        "versionContent": {
          "body": "Get your next gaming fix by updating your profile then initiating your next shipment.",
          "effectiveDate": "2019-05-20T03:04:05.000Z",
          "title": "Request Another Delivery"
        }
      },
  ]
    expect(component.steps).toEqual(expectedOutput)
  });
});
