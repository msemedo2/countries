export interface Country {
	cca2: string;
	flags: { png: string };
	name: { common: string };
	population: number;
	region: string;
	capital: string;
}

const Countries = ({ countries }: { countries: Country[] }) => {
	return (
		<div className="countries-container">
			{countries.map(({ cca2, flags, name, population, region, capital }) => {
				return (
					<div className="country" key={cca2}>
						<div className="image-container">
							<img src={flags.png} alt={name.common} className="flag" />
						</div>
						<div className="country-info-container">
							<h3 className="country-name">{name.common}</h3>
							<div className="info-container">
								<p className="title">Population:</p>
								<p className="info">{population.toLocaleString('en-US')}</p>
							</div>
							<div className="info-container">
								<p className="title">Region:</p>
								<p className="info">{region}</p>
							</div>
							<div className="info-container">
								<p className="title">Capital:</p>
								<p className="info">{capital}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Countries;
