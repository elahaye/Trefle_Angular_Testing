import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'The Plant Library' title`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('The Plant Library');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'The Plant Library'
    );
  });

  it('should have search property', async () => {
    const searchInput = fixture.nativeElement.querySelector('input');
    searchInput.value = 'dandelion';
    searchInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.search).toBe(searchInput.value);
  });
});
