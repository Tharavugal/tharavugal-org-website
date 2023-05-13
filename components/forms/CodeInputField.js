import { useField } from '@opentf/react-form';
import { Editor } from '@opentf/react-code-editor';

export default function CodeInputField({ label, name, lang }) {
  const { field, error } = useField(name);
  return (
    <Editor
      title={label}
      lang={lang}
      value={field.value}
      onChange={field.onChange}
      config={{ textArea: { onBlur: field.onBlur } }}
      style={{ height: '350px' }}
    />
  );
}
