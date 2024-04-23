import React from 'react'
import Card from '../Card/Card';

const RendimientoCard = () => {
    return (
        <Card title="Rendimiento semanal" className="bg-color3 dark:bg-color4 transform transition-transform hover:scale-110">
            <p className="text-white dark:text-black">
                Se recomienda mayor constancia para lograr los objetivos. Sigue adelante! Tu puedes!
            </p>
            <div className="card">
                <div className="ml-24 radial-progress text-secondary font-medium" style={{ "--value": "45", "--size": "10.5rem", "--thickness": "1.5rem" }} role="progressbar">
                    45%
                </div>
            </div>
        </Card>
    );
};

export default RendimientoCard;