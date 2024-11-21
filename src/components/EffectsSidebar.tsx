interface EffectsSidebarProps {
    image: Blob | null;
    setProcessedImage: (image: Blob) => void;
}

function EffectsSidebar({ image, setProcessedImage }: EffectsSidebarProps) {
    return (
        <div className="effects-sidebar">
            <h3>Add overlay images</h3>
            <p>Coming soon!</p>
            <h3>Add filters</h3>
            <p>Coming soon!</p>
            <h3>Animate</h3>
            <p>Coming soon!</p>
        </div>
    );
}

export default EffectsSidebar;