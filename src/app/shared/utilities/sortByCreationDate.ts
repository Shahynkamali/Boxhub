interface CreatedType<T> {
  created: string;
}

const sortByCreationDate = <T extends CreatedType<T>>(
  values: CreatedType<T>[]
) =>
  values.sort(
    (a, b) => Number(new Date(a.created)) - Number(new Date(b.created))
  );

export { sortByCreationDate };
