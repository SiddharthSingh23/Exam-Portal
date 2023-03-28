import Button from './Button';
import TextField from './TextField';
import Paper from './Paper'

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Button(theme),
    TextField(theme),
    Paper(theme),
  );
}