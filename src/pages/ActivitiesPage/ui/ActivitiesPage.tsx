import React, { useEffect } from "react";
import { useActivityStore} from '@/app/store/activitiesSection/activityStore'
import ActivitiesSection from "@/widgets/ActivitiesSection/ui/ActivitiesSection";

const ActivitiesPage: React.FC = () => {
  const { data, loading, error, fetchActivities } = useActivityStore();

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return <ActivitiesSection activities={data} />;
};

export default ActivitiesPage;
