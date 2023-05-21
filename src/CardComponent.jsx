export default function CardComponent({ title, description, repoUrl, appUrl }) {
  return (
    <>
      <p>{title + description + repoUrl + appUrl}</p>
    </>
  );
}
