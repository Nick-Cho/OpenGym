package openSearchTypes

type Hits struct {
	Index  string `json:"_index"`
	ID     string `json:"_id"`
	Score  int    `json:"_score"`
	Source struct {
		Name         string  `json:"name"`
		Address      string  `json:"address"`
		OwnerID      int     `json:"owner_id"`
		IsCommercial int     `json:"is_commercial"`
		Fee          int     `json:"fee"`
		Lat          float64 `json:"lat"`
		Lng          float64 `json:"lng"`
		Geohash      string  `json:"geohash"`
	} `json:"_source"`
}
type Response struct {
	Took     int  `json:"took"`
	TimedOut bool `json:"timed_out"`
	Shards   struct {
		Total      int `json:"total"`
		Successful int `json:"successful"`
		Skipped    int `json:"skipped"`
		Failed     int `json:"failed"`
	} `json:"_shards"`
	Hits struct {
		Total struct {
			Value    int    `json:"value"`
			Relation string `json:"relation"`
		} `json:"total"`
		MaxScore float64 `json:"max_score"`
		Hits     []Hits  `json:"hits"`
	} `json:"hits"`
}
