import { PageContainer } from "../components/shared/PageContainer";
import { Button, Card, Loading, Error } from "../components";
import { useItems, useCreateItem } from "../hooks";
import { useNotification } from "../contexts";

export function HomePage() {
  const { data, isLoading, error, refetch } = useItems();
  const { mutate: createItem, isPending } = useCreateItem();
  const { show } = useNotification();

  const handleCreate = () => {
    createItem(undefined, {
      onSuccess: () => {
        show("Datensatz erfolgreich erstellt!", "success");
      },
      onError: () => {
        show("Fehler beim Erstellen des Datensatzes", "error");
      },
    });
  };

  return (
    <PageContainer title="Startseite">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Daten abrufen">
          {isLoading && <Loading message="Lädt Daten..." />}
          {error && <Error message={error.message} retry={() => refetch()} />}
          {data && (
            <div>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-96 text-sm">
                {JSON.stringify(data, null, 2)}
              </pre>
              <Button
                onClick={() => refetch()}
                className="mt-4 w-full"
              >
                Aktualisieren
              </Button>
            </div>
          )}
        </Card>

        <Card title="Neuen Datensatz erstellen">
          <p className="text-gray-600 mb-4">
            Klicke auf den Button, um einen neuen Datensatz in der
            <code className="bg-gray-100 px-2 py-1 rounded">change_me_if_needed</code> Tabelle
            zu erstellen.
          </p>
          <Button
            onClick={handleCreate}
            loading={isPending}
            variant="primary"
            size="large"
            className="w-full"
          >
            Datensatz erstellen
          </Button>
        </Card>
      </div>
    </PageContainer>
  );
}
