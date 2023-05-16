import { setInObj } from '@opentf/utils';

export default function zodErrors(schema, values) {
  const errors = {};
  const result = schema.safeParse(values);
  if (!result.success) {
    result.error.issues.forEach((i) =>
      setInObj(errors, i.path.join('.'), i.message)
    );
  }
  return errors;
}
