import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import toast from 'react-hot-toast';
import { deleteAdvert } from '@/api/adverts.api';
import { Button } from '@/components/ui/button';

const DeleteAdvert = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const { fn: DeleteAdvert, loading } = useFetch(deleteAdvert)

  const handleDelete = async () => {
    try {
      const res = await DeleteAdvert(id)

      if (!res || res.error) {
        throw new Error(res?.error || 'Error al intentar eliminar el anuncio.');
      }

      toast.success('¡Anuncio eliminado con éxito!');
      if (!loading) {
        navigate('/cuenta');
      }
    } catch (error) {
      toast.error(error.message || 'Ocurrió un error inesperado. Intenta más tarde.');
    }
  };

  return (
    <div className="py-10 px-5 lg:px-40">
      <h1 className="text-2xl font-bold mb-4">Eliminar Anuncio</h1>
      <p>¿Estás seguro que deseas eliminar este anuncio? Esta acción no se puede deshacer.</p>
      <div className="mt-6 flex gap-4">
        <Button onClick={handleDelete} variant="destructive" disabled={loading}>
          {loading ? 'Eliminando...' : 'Eliminar'}
        </Button>
        <Button onClick={() => navigate(-1)} variant="secondary">
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default DeleteAdvert;
