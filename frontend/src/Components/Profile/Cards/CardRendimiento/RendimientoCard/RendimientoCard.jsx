import React from 'react'
import Card from '../Card/Card';

const RendimientoCard = () => {
    return (
        <Card title="Rendimiento semanal" className="bg-color3 dark:bg-color4">
            <p className="text-white text-sm dark:text-black py-2 xl:text-base">Se recomienda mayor constancia para lograr los objetivos. Sigue adelante! Tu puedes!</p>
            <div className="py-3 flex justify-center">
                <div className="radial-progress text-secondary font-medium" style={{ "--value": "45", "--size": "7rem", "--thickness": ".8rem" }} role="progressbar">45%</div>
            </div>
        </Card>
    );
};

export default RendimientoCard;