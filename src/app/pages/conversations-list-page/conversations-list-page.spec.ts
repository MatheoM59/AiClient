import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversationsListPage } from './conversations-list-page';

describe('ConversationsListPage', () => {
  let component: ConversationsListPage;
  let fixture: ComponentFixture<ConversationsListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationsListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversationsListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
