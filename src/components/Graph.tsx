import { useEffect, useRef } from "react";
import { compile } from "mathjs";

type GraphProps = {
  equation: string;
};

export default function Graph({ equation }: GraphProps) {
    
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const expr = compile(equation);

        ctx.strokeStyle = "blue";
        ctx.beginPath();

        for (let px = 0; px < canvas.width; px++) {
        const x = (px - canvas.width / 2) / 40;
        const y = expr.evaluate({ x }) as number;

        const py = canvas.height / 2 - y * 40;

        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
        }

        ctx.stroke();
    }, [equation]);

    return <div className="d-flex justify-content-center">
    <canvas ref={canvasRef} width={800} height={600} className="border border-dark"></canvas>
    </div>
}