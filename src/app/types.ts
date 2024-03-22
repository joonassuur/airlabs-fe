enum Status {
  scheduled = 'scheduled',
  active = 'active',
  landed = 'landed',
  cancelled = 'cancelled',
}

interface Airport {
  name: string;
  iata_code: string;
  icao_code: string;
  lat: number;
  lng: number;
  alt: number;
  city: string;
  city_code: string;
  un_locode: string;
  timezone: string;
  country_code: string;
  phone: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  names: {
    [key: string]: string;
  };
  runways: number;
  departures: number;
  connections: number;
  is_major: boolean;
  is_international: number;
  slug: string;
}
interface Flight {
  airline_iata: string;
  airline_icao: string;
  flight_iata: string;
  flight_icao: string;
  flight_number: string;
  cs_airline_iata: string;
  cs_flight_number: string;
  cs_flight_iata: string;
  dep_iata: string;
  dep_icao: string;
  dep_terminal: string;
  dep_gate: string;
  dep_time: string;
  dep_time_ts: number;
  dep_time_utc: string;
  dep_estimated: string;
  dep_estimated_ts: number;
  dep_estimated_utc: string;
  dep_actual: string;
  dep_actual_ts: number;
  dep_actual_utc: string;
  arr_iata: string;
  arr_icao: string;
  arr_terminal: string;
  arr_gate: string;
  arr_baggage: string;
  arr_time: string;
  arr_time_ts: number;
  arr_time_utc: string;
  arr_estimated: string;
  arr_estimated_ts: number;
  arr_estimated_utc: string;
  arr_actual: string;
  arr_actual_ts: number;
  arr_actual_utc: string;
  status: Status;
  duration: number;
  delayed: number;
  dep_delayed: number;
  arr_delayed: number;
}

export { Status };
export type { Airport, Flight };
