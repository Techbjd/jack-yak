import Header from './Header';

export default function ResponsiveHeader() {
    return (
        <>
            <div className="w-full md:hidden">
                <Header tone="onLight" />
            </div>
            <div className="hidden w-full md:block">
                <Header tone="onDark" />
            </div>
        </>
    );
}
