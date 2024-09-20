export default function _Image({ path, title } : { path: string, title: string}) {
  return (
    <div>
      <p>{title}</p>
      <img src={path} />
    </div>
  );
}
