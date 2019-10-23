import { get } from './actions';
import { timer, Observable, of } from 'rxjs';
import { map, mapTo, startWith } from 'rxjs/operators';


const handle = on(get).pipe(
  (id, { state, $state }) => (
    // operators
    of(123),
    // operators
    of(123)
  )
);
